import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ConfigurationService {
  config: any = null;

  constructor(private httpClient: HttpClient) {
  }

  get(key: string) {
    return this.config[key];
  }

  load() {
    const envConfigFilePath = `../../assets/config.json`;

    return this.httpClient.get<any>(envConfigFilePath)
      .toPromise()
      .then(response => this.config = response);
  }
}

export function loadConfiguration(config: ConfigurationService) {
  return () => config.load();
}
