import json
from data.base_data import BaseData


class DeepDiveIntoKeyComponentsData(BaseData):

    def __init__(self):
        self.dive_deep_file_name = 'data/deep_dive_into_key_components.json'

    def get_heading(self, language: str) -> str:
        with open(self.dive_deep_file_name) as f:
            data = json.load(f)
            heading = data[language]['heading']
        return heading

    def get_subheading(self, language: str) -> str:
        with open(self.dive_deep_file_name) as f:
            data = json.load(f)
            heading = data[language]['subheading']
        return heading

    def get_database_subheading(self, language: str) -> str:
        with open(self.dive_deep_file_name) as f:
            data = json.load(f)
            heading = data[language]['databaseHeading']
        return heading

    def get_web_app_servers_subheading(self, language: str) -> str:
        with open(self.dive_deep_file_name) as f:
            data = json.load(f)
            heading = data[language]['webServersApplicationServersHeading']
        return heading

    def get_load_balancers_subheading(self, language: str) -> str:
        with open(self.dive_deep_file_name) as f:
            data = json.load(f)
            heading = data[language]['loadBalancersHeading']
        return heading

    def get_caching_subheading(self, language: str) -> str:
        with open(self.dive_deep_file_name) as f:
            data = json.load(f)
            heading = data[language]['cachingHeading']
        return heading

    def get_single_points_failure_subheading(self, language: str) -> str:
        with open(self.dive_deep_file_name) as f:
            data = json.load(f)
            heading = data[language]['singlePointsOfFailureHeading']
        return heading

    def get_auth_subheading(self, language: str) -> str:
        with open(self.dive_deep_file_name) as f:
            data = json.load(f)
            heading = data[language]['authenticationAuthorizationHeading']
        return heading

    def get_rate_limiting_subheading(self, language: str) -> str:
        with open(self.dive_deep_file_name) as f:
            data = json.load(f)
            heading = data[language]['rateLimitingHeading']
        return heading

    def get_database_question(self, language: str) -> str:
        with open(self.dive_deep_file_name) as f:
            data = json.load(f)
            question = data[language]['databasesQuestion']
        return question

    def get_wep_app_servers_question(self, language: str) -> str:
        with open(self.dive_deep_file_name) as f:
            data = json.load(f)
            question = data[language]['webAppServersQuestion']
        return question

    def get_load_balancers_question(self, language: str) -> str:
        with open(self.dive_deep_file_name) as f:
            data = json.load(f)
            question = data[language]['loadBalancersQuestion']
        return question

    def get_caching_question(self, language: str) -> str:
        with open(self.dive_deep_file_name) as f:
            data = json.load(f)
            question = data[language]['cachingQuestion']
        return question

    def get_single_points_failure_question(self, language: str) -> str:
        with open(self.dive_deep_file_name) as f:
            data = json.load(f)
            question = data[language]['singlePointsFailureQuestion']
        return question

    def get_auth_question(self, language: str) -> str:
        with open(self.dive_deep_file_name) as f:
            data = json.load(f)
            question = data[language]['authenticationAuthorizationQuestion']
        return question

    def get_rate_limiting_question(self, language: str) -> str:
        with open(self.dive_deep_file_name) as f:
            data = json.load(f)
            question = data[language]['rateLimitingQuestion']
        return question


