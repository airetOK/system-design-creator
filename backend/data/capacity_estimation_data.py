import json
from data.base_data import BaseData


class CapacityEstimationData(BaseData):

    def __init__(self):
        self.ce_file_name = 'data/capacity_estimation.json'

    def get_heading(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            heading = data[language]['heading']
        return heading

    def get_users_subheading(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            subheading = data[language]['usersHeading']
        return subheading

    def get_traffic_subheading(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            subheading = data[language]['trafficHeading']
        return subheading

    def get_storage_subheading(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            subheading = data[language]['storageHeading']
        return subheading

    def get_memory_subheading(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            subheading = data[language]['memoryHeading']
        return subheading

    def get_network_subheading(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            subheading = data[language]['networkHeading']
        return subheading

    def get_daily_users(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            value = data[language]['dailyUsers']
        return value

    def get_max_concurrent_users(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            value = data[language]['maxConcurrentUsers']
        return value

    def get_read_ops(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            value = data[language]['readOps']
        return value

    def get_write_ops(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            value = data[language]['writeOps']
        return value

    def get_peak_read_ops(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            value = data[language]['peakReadOps']
        return value

    def get_peak_write_ops(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            value = data[language]['peakWriteOps']
        return value

    def get_storage_type(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            value = data[language]['storageType']
        return value

    def get_total_amount_storage(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            value = data[language]['totalAmountStorage']
        return value

    def get_growth_rate(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            value = data[language]['growthRate']
        return value

    def get_include_cache_memory(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            value = data[language]['includeCacheMemory']
        return value

    def get_cache_memory_size(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            value = data[language]['cacheMemorySize']
        return value

    def get_traffic_volume(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            value = data[language]['trafficVolume']
        return value

    def get_data_transfer_size(self, language: str) -> str:
        with open(self.ce_file_name) as f:
            data = json.load(f)
            value = data[language]['dataTransferSize']
        return value
