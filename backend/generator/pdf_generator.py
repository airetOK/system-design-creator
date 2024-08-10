from reportlab.pdfgen import canvas, textobject
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.lib import colors

from generator.generator import Generator
from entity.system_design import SystemDesign


class PdfGenerator(Generator):

    CLARIFY_REQUIREMENTS = "Clarify requirements"
    FUNCTIONAL_REQUIREMENTS = "Functional requirements"
    NONFUNCTIONAL_REQUIREMENTS = "Non Functional requirements"
    CAPACITY_ESTIMATION = "Capacity estimation"
    USERS = "Users"

    def __init__(self):
        super().__init__()

    def create(self, system_design: SystemDesign):
        pdf = canvas.Canvas(f"{system_design.name}{self.pdf_extension}")

        self.__add_title(pdf, system_design.name)

        text = pdf.beginText(40, 680)

        self.__add_subheading(text, color=colors.red,
                              font_size=24, subheading=self.CLARIFY_REQUIREMENTS)
        pdf.line(0, text.getY()+20, 505, text.getY()+20)
        self.__add_subheading(text, color=colors.blue,
                              font_size=18, subheading=self.FUNCTIONAL_REQUIREMENTS)

        self.__add_lines(
            text, system_design.clarify_requirements.func_req_answers)

        self.__add_subheading(text, color=colors.blue,
                              font_size=18, subheading=self.NONFUNCTIONAL_REQUIREMENTS)

        self.__add_lines(
            text, system_design.clarify_requirements.nonfunc_req_answers)

        self.__add_subheading(text, color=colors.red,
                              font_size=24, subheading=self.CAPACITY_ESTIMATION)
        pdf.line(0, text.getY()+20, 505, text.getY()+20)
        self.__add_subheading(text, color=colors.blue,
                              font_size=18, subheading=self.USERS)

        self.__add_line(
            text, str(system_design.capacity_estimation.daily_users_count))
        self.__add_line(
            text, str(system_design.capacity_estimation.max_concurrent_users_count))

        pdf.drawText(text)
        pdf.save()

    def __add_title(self, pdf: canvas.Canvas, title: str):
        pdf.setTitle(title)
        pdf.drawCentredString(300, 770, title)

    def __add_heading(self, pdf: canvas.Canvas, y: int, heading: str):
        pdf.setFillColorRGB(255, 0, 0)
        pdf.setFont("Courier-Bold", 24)
        pdf.drawCentredString(290, y, heading)
        pdf.line(30, y-10, 550, y-10)

    def __add_subheading(self, text: textobject.PDFTextObject, color: colors, font_size: int, subheading: str):
        text.setFont("Courier", font_size)
        text.setFillColor(color)
        text.textLine(subheading)

    def __add_lines(self, text: textobject.PDFTextObject, text_lines: list[str]):
        text.setFont("Courier", 14)
        text.setFillColor(colors.black)
        for line in text_lines:
            text.textLine(line)
        text.textLine()

    def __add_line(self, text: textobject.PDFTextObject, line: str):
        text.setFont("Courier", 14)
        text.setFillColor(colors.black)
        text.textLine(line)
