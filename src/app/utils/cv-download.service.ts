import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvDownloadService {
  public constructor(private http: HttpClient) {}

  public downloadCv(): Observable<HttpResponse<Blob>> {
    return this.http
      .get('cv/download', {
        observe: 'response',
        responseType: 'blob',
      })
      .pipe(share(), tap(this.handleFileDownload));
  }

  private handleFileDownload(response: HttpResponse<Blob>) {
    const anchor = document.createElement('a');

    const contentDisposition = response.headers.get('Content-Disposition');
    const blob = response.body ?? new Blob();

    const filename = contentDisposition
      ? contentDisposition.split('=').pop()!.replaceAll('"', '')
      : 'Downloaded File';

    anchor.download = filename;
    anchor.href = window.URL.createObjectURL(blob);
    anchor.click();
    anchor.remove();
  }
}
