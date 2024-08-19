import json
from data.base_data import BaseData


class HighLevelDesignData(BaseData):

    def __init__(self):
        self.hld_file_name = 'data/high_level_design.json'

    def get_heading(self, language: str) -> str:
        with open(self.hld_file_name) as f:
            data = json.load(f)
            heading = data[language]
        return heading
