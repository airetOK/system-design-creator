from pydantic import BaseModel


class ClarifyRequirements(BaseModel):

    func_req_answers: list[str]
    nonfunc_req_answers: list[str]
