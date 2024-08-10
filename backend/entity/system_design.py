from pydantic import BaseModel

from entity.clarify_requirements import ClarifyRequirements
from entity.capacity_estimation import CapacityEstimation


class SystemDesign(BaseModel):

    name: str
    clarify_requirements: ClarifyRequirements
    capacity_estimation: CapacityEstimation
