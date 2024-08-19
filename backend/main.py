from os import unlink
from fastapi import FastAPI, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse

from entity.system_design import SystemDesign
from manager.pdf_manager import PdfManager

import urllib.request

app = FastAPI()
# TO:DO get URL from env
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=False,
    allow_methods=["POST"],
    allow_headers=["*"],
)
pdf_manager = PdfManager()


@app.post("/generate_pdf")
def generate_pdf(system_design: SystemDesign, background_tasks: BackgroundTasks):
    pdf = pdf_manager.create(system_design)
    background_tasks.add_task(pdf_manager.delete, pdf)
    return FileResponse(pdf.filename, media_type="application/pdf")


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
