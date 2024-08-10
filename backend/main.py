from fastapi import FastAPI

from entity.system_design import SystemDesign
from generator.pdf_generator import PdfGenerator

app = FastAPI()
pdf_generator = PdfGenerator()


@app.post("/generate_pdf")
def read_root(system_design: SystemDesign):
    pdf_generator.create(system_design)
    return system_design


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
