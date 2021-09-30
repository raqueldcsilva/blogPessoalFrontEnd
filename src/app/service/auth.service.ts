import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

    entrar(userLogin: UserLogin ): Observable<UserLogin>{
      return this.http.post<UserLogin>('https://pessoalblogrdcs.herokuapp.com/usuarios/logar', userLogin)
    }

    cadastrar(user: User): Observable<User>{
      return this.http.post <User>('https://pessoalblogrdcs.herokuapp.com/usuarios/cadastrar', user)
    }
}

//https://pessoalblogrdcs.herokuapp.com/