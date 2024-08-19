from abc import ABC, abstractmethod


class BaseData(ABC):

    @abstractmethod
    def get_heading(self, language: str) -> str:
        pass
