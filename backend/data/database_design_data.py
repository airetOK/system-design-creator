import json
from data.base_data import BaseData


class DatabaseDesignData(BaseData):

    def __init__(self):
        self.dd_file_name = 'data/database_design.json'

    def get_heading(self, language: str) -> str:
        with open(self.dd_file_name) as f:
            data = json.load(f)
            heading = data[language]
        return heading
