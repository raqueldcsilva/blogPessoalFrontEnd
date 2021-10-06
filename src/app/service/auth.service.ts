import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';

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

    getByIdUser(id: number): Observable<User>{
      return this.http.get<User>(`https://pessoalblogrdcs.herokuapp.com/usuarios/${id}`)
    }

    logado() {
      let ok: boolean = false;

      if(environment.token != ''){
        ok = true
      }

      return ok
    }
}

//https://pessoalblogrdcs.herokuapp.com/