import json
from data.base_data import BaseData


class DesignApiAndCommunicationProtocolsData(BaseData):

    def __init__(self):
        self.da_file_name = 'data/design_api_and_communication_protocols.json'

    def get_heading(self, language: str) -> str:
        with open(self.da_file_name) as f:
            data = json.load(f)
            heading = data[language]['heading']
        return heading

    def get_columns(self, language: str) -> list[str]:
        with open(self.da_file_name) as f:
            data = json.load(f)
            columns = data[language]['columns']
        return columns
