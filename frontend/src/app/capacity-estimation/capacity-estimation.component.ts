import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { CAPACITY_ESTIMATION } from '../constants/capacity_estimation';

@Component({
  selector: 'app-capacity-estimation',
  standalone: true,
  imports: [],
  templateUrl: './capacity-estimation.component.html',
  styleUrl: './capacity-estimation.component.scss'
})
export class CapacityEstimationComponent implements OnInit {

  @Input()
  language: string = '';

  heading: string = '';
  usersHeading: string = '';
  trafficHeading: string = '';
  storageHeading: string = '';
  memoryHeading: string = '';
  networkHeading: string = '';
  dailyUsers: string = '';
  maxConcurrentUsers: string = '';
  readOps: string = '';
  writeOps: string = '';
  peakReadOps: string = '';
  peakWriteOps: string = '';
  storageType: string = '';
  totalAmountStorage: string = '';
  growthRate: string = '';
  includeCacheMemory: string = '';
  cacheMemorySize: string = '';
  trafficVolume: string = '';
  dataTransferSize: string = '';

  ngOnInit(): void {
    const values = CAPACITY_ESTIMATION[this.language];
    this.heading = values['heading'];
    this.usersHeading = values['usersHeading'];
    this.trafficHeading = values['trafficHeading'];
    this.storageHeading = values['storageHeading'];
    this.memoryHeading = values['memoryHeading'];
    this.networkHeading = values['networkHeading'];
    this.dailyUsers = values['dailyUsers'];
    this.maxConcurrentUsers = values['maxConcurrentUsers'];
    this.readOps = values['readOps'];
    this.writeOps = values['writeOps'];
    this.peakReadOps = values['peakReadOps'];
    this.peakWriteOps = values['peakWriteOps'];
    this.storageType = values['storageType'];
    this.totalAmountStorage = values['totalAmountStorage'];
    this.growthRate = values['growthRate'];
    this.includeCacheMemory = values['includeCacheMemory'];
    this.cacheMemorySize = values['cacheMemorySize'];
    this.trafficVolume = values['trafficVolume'];
    this.dataTransferSize = values['dataTransferSize'];
  }


}
