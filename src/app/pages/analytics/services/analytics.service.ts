import { HttpClient } from '@angular/common/http';
import {
  computed,
  inject,
  Injectable,
  ResourceRef,
  signal,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { environment } from '@env/environment.development';
import { Observable } from 'rxjs';
import { UsersResponse } from '../types/users';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  http = inject(HttpClient);
  isReload = signal(false);

  private userResource: ResourceRef<any> = rxResource({
    request: () => ({ isReload: this.isReload() }),
    loader: ({ request }) => {
      console.log("request: ", request);
      return this.listUsers();
    },
  });

  public users = computed(
    () => this.userResource.value() || ({} as UsersResponse)
  );

  private listUsers(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(environment.url + '/users');
  }
}
