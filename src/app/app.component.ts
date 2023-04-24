import { Component, OnInit } from '@angular/core';
import { DefaultService, TypesInfoWithMetaDto } from 'src/xhr_client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    poke_types : TypesInfoWithMetaDto[] | null = null;
    constructor(private service: DefaultService){

    }
    ngOnInit(): void {
        this.service.getTypes("de")
            .then((value: TypesInfoWithMetaDto[]) => {
                console.log(value);
                this.poke_types = value;
            })
            .catch((reason) => console.log(reason));
    }
    startPokeSearch(types: string[], nameQuery: string){
      console.log(types);
    }
  title = 'poke-poke';
}
