from abc import ABC, abstractmethod
from entity.system_design import SystemDesign


class Generator(ABC):

    def __init__(self):
        super().__init__()
        self.pdf_extension = ".pdf"

    @abstractmethod
    def create(self, system_design: SystemDesign):
        pass
