import base64
import os
from uuid import uuid4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, PageBreak, Flowable, Table
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.units import cm

from manager.file_manager import FileManager
from manager.pdf_response import PdfResponse
from entity.system_design import SystemDesign
from entity.clarify_requirements import ClarifyRequirements
from entity.capacity_estimation import CapacityEstimation
from entity.high_level_design import HighLevelDesign
from entity.database_design import DatabaseDesign
from entity.design_api_and_communicaton_protocols import DesignApiAndCommunicationProtocols
from entity.deep_dive_into_key_components import DeepDiveIntoKeyComponents
from data.clarify_requirements_data import ClarifyRequirementsData
from data.capacity_estimation_data import CapacityEstimationData
from data.high_level_design_data import HighLevelDesignData
from data.database_design_data import DatabaseDesignData
from data.design_api_and_communication_protocols_data import DesignApiAndCommunicationProtocolsData
from data.deep_dive_into_key_components_data import DeepDiveIntoKeyComponentsData


class PdfManager(FileManager):

    def __init__(self):
        super().__init__()
        self.__cr_data = ClarifyRequirementsData()
        self.__ce_data = CapacityEstimationData()
        self.__hld_data = HighLevelDesignData()
        self.__dd_data = DatabaseDesignData()
        self.__da_data = DesignApiAndCommunicationProtocolsData()
        self.__dive_deep_data = DeepDiveIntoKeyComponentsData()

        self.__styles = getSampleStyleSheet()
        self.__style_title = self.__styles["Title"]
        self.__style_normal = self.__styles["Normal"]
        self.__style_heading1 = self.__styles["Heading1"]
        self.__style_heading2 = self.__styles["Heading2"]
        self.__style_heading3 = self.__styles["Heading3"]

        self.path = "static"
        self.pdf_extension = "pdf"
        self.png_extension = "png"

    def create(self, system_design: SystemDesign) -> PdfResponse:
        pdf_data = []
        filename = f'{self.path}/{str(uuid4())}.{self.pdf_extension}'
        pdf = PdfResponse(filename)

        lang = system_design.language
        clarify_requirements = system_design.clarify_requirements
        capacity_estimation = system_design.capacity_estimation
        high_level_design = system_design.high_level_design
        database_design = system_design.database_design
        design_api = system_design.design_api_and_communicaton_protocols
        deep_dive = system_design.deep_dive_into_key_components

        doc = self.__doc_template(filename)
        self.__add_title(pdf_data, system_design.name)
        self.__add_clarify_requirements(pdf_data, lang, clarify_requirements)
        self.__add_capacity_estimation(pdf_data, lang, capacity_estimation)
        pdf.images.append(self.__add_high_level_design(pdf_data, lang, high_level_design))
        pdf.images.append(self.__add_database_design(pdf_data, lang, database_design))
        self.__add_design_api_and_communication_protocols(pdf_data, lang, design_api)
        self.__add_dive_deeper_into_key_components(pdf_data, lang, deep_dive)
        doc.build(pdf_data)

        return pdf

    @staticmethod
    def delete(pdf: PdfResponse):
        os.unlink(pdf.filename)
        for image in pdf.images:
            if image:
                os.unlink(image)

    def __add_title(self, pdf_data: list[Flowable], title: str):
        pdf_data.append(Paragraph(title, self.__style_title))
        pdf_data.append(self.__add_line_break())

    def __add_clarify_requirements(self, pdf_data: list[Flowable], lang: str,
                                   clarify_requirements: ClarifyRequirements):
        heading = self.__paragraph_heading(self.__cr_data.get_heading(lang))
        func_req_subheading = self.__paragraph_subheading(
            self.__cr_data.get_func_req_subheading(lang))
        non_func_req_subheading = self.__paragraph_subheading(
            self.__cr_data.get_non_func_req_subheading(lang))

        pdf_data.append(heading)
        pdf_data.append(self.__add_line_break())
        pdf_data.append(func_req_subheading)
        self.__add_answer_after_question(pdf_data,
                                         self.__cr_data.get_func_req_questions(lang),
                                         clarify_requirements.func_req_answers)
        pdf_data.append(self.__add_line_break())
        pdf_data.append(non_func_req_subheading)
        self.__add_answer_after_question(pdf_data,
                                         self.__cr_data.get_non_func_req_questions(lang),
                                         clarify_requirements.nonfunc_req_answers)
        pdf_data.append(self.__add_page_break())

    def __add_capacity_estimation(self, pdf_data: list[Flowable], lang: str, capacity_estimation: CapacityEstimation):
        heading = self.__paragraph_heading(self.__ce_data.get_heading(lang))
        users_subheading = self.__paragraph_subheading(self.__ce_data.get_users_subheading(lang))
        traffic_subheading = self.__paragraph_subheading(self.__ce_data.get_traffic_subheading(lang))
        storage_subheading = self.__paragraph_subheading(self.__ce_data.get_storage_subheading(lang))
        memory_subheading = self.__paragraph_subheading(self.__ce_data.get_memory_subheading(lang))
        network_subheading = self.__paragraph_subheading(self.__ce_data.get_network_subheading(lang))
        pdf_data.append(heading)
        pdf_data.append(self.__add_line_break())

        pdf_data.append(users_subheading)
        values = [self.__ce_data.get_daily_users(lang), self.__ce_data.get_max_concurrent_users(lang)]
        answers = [capacity_estimation.daily_users_count, capacity_estimation.max_concurrent_users_count]
        self.__add_answer_after_question(pdf_data, values, answers)
        pdf_data.append(self.__add_line_break())

        pdf_data.append(traffic_subheading)
        values = [self.__ce_data.get_read_ops(lang),
                  self.__ce_data.get_write_ops(lang),
                  self.__ce_data.get_peak_read_ops(lang),
                  self.__ce_data.get_peak_write_ops(lang)]
        answers = [capacity_estimation.read_ops_count, capacity_estimation.write_ops_count,
                   capacity_estimation.peak_read_ops_count, capacity_estimation.peak_write_ops_count]
        self.__add_answer_after_question(pdf_data, values, answers)
        pdf_data.append(self.__add_line_break())

        pdf_data.append(storage_subheading)
        values = [self.__ce_data.get_storage_type(lang),
                  self.__ce_data.get_total_amount_storage(lang),
                  self.__ce_data.get_growth_rate(lang)]
        answers = [capacity_estimation.storage,
                   capacity_estimation.total_amount_storage,
                   capacity_estimation.growth_rate]
        self.__add_answer_after_question(pdf_data, values, answers)
        pdf_data.append(self.__add_line_break())

        pdf_data.append(memory_subheading)
        values = [self.__ce_data.get_include_cache_memory(lang),
                  self.__ce_data.get_cache_memory_size(lang)]
        answers = [capacity_estimation.include_cache_memory, capacity_estimation.cache_memory_size]
        self.__add_answer_after_question(pdf_data, values, answers)
        pdf_data.append(self.__add_line_break())

        pdf_data.append(network_subheading)
        values = [self.__ce_data.get_traffic_volume(lang),
                  self.__ce_data.get_data_transfer_size(lang)]
        answers = [capacity_estimation.traffic_volume, capacity_estimation.data_transfer_size]
        self.__add_answer_after_question(pdf_data, values, answers)
        pdf_data.append(self.__add_page_break())

    def __add_high_level_design(self, pdf_data: list[Flowable], lang: str, high_level_design: HighLevelDesign) -> str:
        heading = self.__paragraph_heading(self.__hld_data.get_heading(lang))
        pdf_data.append(heading)
        pdf_data.append(self.__add_line_break())
        image_name = self.__add_image(pdf_data, high_level_design)
        pdf_data.append(self.__add_page_break())
        return image_name

    def __add_database_design(self, pdf_data: list[Flowable], lang: str, database_design: DatabaseDesign) -> str:
        heading = self.__paragraph_heading(self.__dd_data.get_heading(lang))
        pdf_data.append(heading)
        pdf_data.append(self.__add_line_break())
        image_name = self.__add_image(pdf_data, database_design)
        pdf_data.append(self.__add_page_break())
        return image_name

    def __add_design_api_and_communication_protocols(self, pdf_data: list[Flowable],
                                                     lang: str, design_api: DesignApiAndCommunicationProtocols):
        heading = self.__paragraph_heading(self.__da_data.get_heading(lang))
        pdf_data.append(heading)
        pdf_data.append(self.__add_line_break())
        self.__add_table(pdf_data, self.__da_data.get_columns(lang), design_api)
        pdf_data.append(self.__add_page_break())

    def __add_dive_deeper_into_key_components(self, pdf_data: list[Flowable],
                                              lang: str, deep_dive: DeepDiveIntoKeyComponents):
        heading = self.__paragraph_heading(self.__dive_deep_data.get_heading(lang))
        subheading = self.__paragraph_subheading(self.__dive_deep_data.get_subheading(lang))
        database_subheading = self.__paragraph_subheading(self.__dive_deep_data.get_database_subheading(lang))
        web_app_servers_subheading = self.__paragraph_subheading(
            self.__dive_deep_data.get_web_app_servers_subheading(lang))
        load_balancers_subheading = self.__paragraph_subheading(
            self.__dive_deep_data.get_load_balancers_subheading(lang))
        caching_subheading = self.__paragraph_subheading(self.__dive_deep_data.get_caching_subheading(lang))
        sp_failures_subheading = self.__paragraph_subheading(
            self.__dive_deep_data.get_single_points_failure_subheading(lang))
        auth_subheading = self.__paragraph_subheading(self.__dive_deep_data.get_auth_subheading(lang))
        rate_limiting_subheading = self.__paragraph_subheading(self.__dive_deep_data.get_rate_limiting_subheading(lang))

        pdf_data.append(heading)
        pdf_data.append(subheading)
        pdf_data.append(self.__add_line_break())

        pdf_data.append(database_subheading)
        values = [self.__dive_deep_data.get_database_question(lang)]
        answers = [deep_dive.database]
        self.__add_answer_after_question(pdf_data, values, answers)
        pdf_data.append(self.__add_line_break())

        pdf_data.append(web_app_servers_subheading)
        values = [self.__dive_deep_data.get_wep_app_servers_question(lang)]
        answers = [deep_dive.web_app_servers]
        self.__add_answer_after_question(pdf_data, values, answers)
        pdf_data.append(self.__add_line_break())

        pdf_data.append(load_balancers_subheading)
        values = [self.__dive_deep_data.get_load_balancers_question(lang)]
        answers = [deep_dive.load_balancers]
        self.__add_answer_after_question(pdf_data, values, answers)
        pdf_data.append(self.__add_line_break())

        pdf_data.append(caching_subheading)
        values = [self.__dive_deep_data.get_caching_question(lang)]
        answers = [deep_dive.caching]
        self.__add_answer_after_question(pdf_data, values, answers)
        pdf_data.append(self.__add_line_break())

        pdf_data.append(sp_failures_subheading)
        values = [self.__dive_deep_data.get_single_points_failure_question(lang)]
        answers = [deep_dive.single_points_failure]
        self.__add_answer_after_question(pdf_data, values, answers)
        pdf_data.append(self.__add_line_break())

        pdf_data.append(auth_subheading)
        values = [self.__dive_deep_data.get_auth_question(lang)]
        answers = [deep_dive.authentication_authorization]
        self.__add_answer_after_question(pdf_data, values, answers)
        pdf_data.append(self.__add_line_break())

        pdf_data.append(rate_limiting_subheading)
        values = [self.__dive_deep_data.get_rate_limiting_question(lang)]
        answers = [deep_dive.rate_limiting]
        self.__add_answer_after_question(pdf_data, values, answers)
        pdf_data.append(self.__add_line_break())

    @staticmethod
    def __doc_template(file_name: str) -> SimpleDocTemplate:
        return SimpleDocTemplate(f"{file_name}",
                                 leftMargin=0.75 * cm,
                                 rightMargin=0.75 * cm,
                                 topMargin=1 * cm,
                                 bottomMargin=1 * cm)

    @staticmethod
    def __add_page_break() -> Flowable:
        return PageBreak()

    @staticmethod
    def __add_line_break() -> Flowable:
        return Spacer(2.5, 0.75 * cm)

    def __paragraph_heading(self, heading: str) -> Flowable:
        return Paragraph(heading, self.__style_heading1)

    def __paragraph_subheading(self, subheading: str) -> Flowable:
        return Paragraph(subheading, self.__style_heading2)

    def __add_answer_after_question(self, pdf_data: list[Flowable], questions: list[str], answers: list[str]):
        for idx, question in enumerate(questions):
            pdf_data.append(Paragraph(question, self.__style_heading3))
            try:
                pdf_data.append(Paragraph(answers[idx], self.__style_normal))
            except IndexError:
                pass

    def __add_image(self, pdf_data: list[Flowable], high_level_design: HighLevelDesign) -> str:
        if high_level_design.image_base64:
            image_name = f"{self.path}/{str(uuid4())}.{self.png_extension}"
            with open(image_name, "wb") as f:
                f.write(base64.decodebytes(bytes(high_level_design.image_base64, encoding='utf8')))

            pdf_data.append(Image(image_name))
            return image_name

    @staticmethod
    def __add_table(pdf_data: list[Flowable], columns: list[str], design_api: DesignApiAndCommunicationProtocols):
        api_requests = design_api.api_requests
        table_data = [columns]
        row = []

        for value in api_requests.values():
            if len(row) >= 3:
                table_data.append(row)
                row = []
            row.append(value)
        table_data.append(row)

        pdf_data.append(Table(table_data, colWidths=200, rowHeights=30))
