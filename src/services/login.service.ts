import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class LoginService{

    private url= environment.urlService;

    constructor(private httpCliente: HttpClient){}

    logging(): Observable<any>{

        let body = {email: 'laratecsys@gmail.com', senha: '1234'};
        console.log('testando consumo de API');
        return this.httpCliente.post<Response>(this.url + `/login`, body)
        
    }
}

export class Response{
    authToken: string;   
}