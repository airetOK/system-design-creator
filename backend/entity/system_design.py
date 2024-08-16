from pydantic import BaseModel

from entity.clarify_requirements import ClarifyRequirements
from entity.capacity_estimation import CapacityEstimation
from entity.high_level_design import HighLevelDesign
from entity.database_design import DatabaseDesign
from entity.design_api_and_communicaton_protocols import DesignApiAndCommunicationProtocols
from entity.deep_dive_into_key_components import DeepDiveIntoKeyComponents


class SystemDesign(BaseModel):

    name: str
    clarify_requirements: ClarifyRequirements
    capacity_estimation: CapacityEstimation
    high_level_design: HighLevelDesign
    database_design: DatabaseDesign
    design_api_and_communicaton_protocols: DesignApiAndCommunicationProtocols
    deep_dive_into_key_components: DeepDiveIntoKeyComponents
