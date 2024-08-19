from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse

from entity.system_design import SystemDesign
from generator.pdf_generator import PdfGenerator

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
pdf_generator = PdfGenerator()


@app.post("/generate_pdf")
def generate_pdf(system_design: SystemDesign):
    filename = pdf_generator.create(system_design)
    return FileResponse(filename, media_type="application/pdf")


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
