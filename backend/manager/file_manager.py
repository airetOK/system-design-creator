from abc import ABC, abstractmethod
from entity.system_design import SystemDesign
from manager.pdf_response import PdfResponse


class FileManager(ABC):

    def __init__(self):
        super().__init__()
        self.pdf_extension = ".pdf"

    @abstractmethod
    def create(self, system_design: SystemDesign):
        pass

    @staticmethod
    @abstractmethod
    def delete(self, pdf: PdfResponse):
        pass
