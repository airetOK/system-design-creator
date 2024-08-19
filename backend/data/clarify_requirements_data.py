import json
from data.base_data import BaseData


class ClarifyRequirementsData(BaseData):

    def __init__(self):
        self.cr_file_name = 'data/clarify_requirements.json'

    def get_heading(self, language: str) -> str:
        f = open(self.cr_file_name)
        data = json.load(f)
        heading = data[language]['headings'][0]
        f.close()
        return heading

    def get_func_req_subheading(self, language: str) -> str:
        f = open(self.cr_file_name)
        data = json.load(f)
        subheading = data[language]['headings'][1]
        f.close()
        return subheading

    def get_non_func_req_subheading(self, language: str) -> str:
        f = open(self.cr_file_name)
        data = json.load(f)
        subheading = data[language]['headings'][2]
        f.close()
        return subheading

    def get_func_req_questions(self, language: str) -> list[str]:
        f = open(self.cr_file_name)
        data = json.load(f)
        questions = data[language]['funcReqQuestions']
        f.close()
        return questions

    def get_non_func_req_questions(self, language: str) -> list[str]:
        f = open(self.cr_file_name)
        data = json.load(f)
        questions = data[language]['nonFuncReqQuestions']
        f.close()
        return questions
