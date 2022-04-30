import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  public usuario:User;

  constructor() {
    this.usuario = {
      id: 1,
      fotoperfil: 'https://www.congreso.es/docu/imgweb/diputados/69_14.jpg',
      idcivis: 69,
      following: 15,
      followers: 1000,
      web: 'miweb.es',
      facebook: 'mifacebook.com',
      twitter: 'mitwitter.com',
      instagram: 'ig.yo.com',
      youtube: 'youtube.com',
      email: 'prueba2@prueba.com',
      nombre: 'Aizpurua Arzallus, Mertxe',
      fotofondo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBYRXhpZgAATU0AKgAAAAgABAExAAIAAAARAAAAPlEQAAEAAAABAQAAAFERAAQAAAABAAAAAFESAAQAAAABAAAAAAAAAABBZG9iZSBJbWFnZVJlYWR5AAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAsAHUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiueufEM8l00OnW4mC9SVLZ9wB2rCviadBJze4HQE4GaxNK12XUL0wPCiLtLAgnNJpuvPdXBtbqIRynIBUEDI7EHvXO6ffPp9yZo0DPtKgN0rzMTmMeanOnL3bu/wArCud/WHf67JZ6n9lWBWUFcknk5qpaeJ5muUS6iiEbHBKAgj35NUtebZr0jYzjYcfgKMXmKlQ56ErapP8AEGztKz9V1VNMjjYxmRnJAXOOnXmsZvEt9G6mS1jWNuQCrAkfXNXdW1CzewtpZbX7RHLyoLbSv41vPMKdSlP2UrNd0FyaXXYYrCC78pyJiQF9COtaFpcLd2sc6AhXGQDXMavLHPo1hJFCIoyWAQHOMcVowX407w1bzbdzEbVHvk9aijjZe2kqkvdUU/wQXNe5lMFrNMBkxozY9cDNZ+jarJqYm8yNUKYxt75rHbxBeT2swltkMLoyFkUjBIx1zSaHctZ2N/cKoZkC4B+uKzeZRniIcj92zvp2TYXOuorM0bUpNShkeSNUKNj5e9VrDXJbvVfsjQoqEtggnPFegsZRag7/ABbBc3KKKK6hlbUGZNNuWUkMImII7cVyOkNqKmZrBAx4Dkge+OtdsQGUqwBBGCD3rln07U9Junew3PE3TAB49CK8jMqU/awqq9le/LuhMbFp+pzavFd3MGMSKztkDgf/AKqh8NqG1cZAOEJGR0rVsP7bmu0kuvlgAIKnAz+AqvoWl3lpqPmzw7E2EZ3A81xQw/72nOEZW5nfmXpqIp+IlVdZBCgblUnHc03W/wDkYG+qfyFX9b0y8utSWWCHemwDO4CpNe0ia6mW6tV3OBh1zg8dCKVfDVZOs4xfxJ7b77feBJ4pA/s6NsDIlAB/A1j3v/Ivab/vSfzqSW31rUykU8cm1TwXUKB7+9X9U0if+zrO2tUMnk53HIHX/wCvmnWVTESq1YwaTSW2u6/yAzb3/kXdN/3n/mafqBP/AAj2nDt81XLjSLqXQLWIJ+/hLEpkcgk//Woj0y7vPD4t5V2TRPmIMMZHp+tS8PVblHlesF+FtPwAt2gA8Jtj/n3k/rWFYf8AIG1P6J/OpVh1yO2NiscoiPGAox+fpWtp+iNFpNxBMcS3A5weFx0rRRqYiUFGDXLFp301tYCLwp/x7XH++KztG/5GMfV/5GiDTdatJHjt1dN/BKuMH8amtdH1Gw1SGVVV13Dc4Ixg9etZw9q40Yum/ceunmB1dFFFfTFBWNqHivRNKvGtL298qdACy+U7YyMjkAitmimrdS4OCfvpteTt+jOc/wCE88Nf9BL/AMgSf/E1NH4y0CZN8d/lc4z5MnX/AL5rdoq06d9U/v8A+AFZwcbUU0/N3X3JR/MxP+Et0P8A5/f/ACE/+FTw+I9KuFJiutwBwf3bD+lalFTUcXG1NWfnr+Fl+ZzQjWT9+Sa8k1/7cyh/bWn/APPx/wCON/hVa78U6NYhDc3mwPnb+6c5xjPQe9bFFYRjVv70lb0f+ZpLmt7u5zv/AAnXhv8A6CP/AJAk/wDiavaZ4i0rWZnhsLrzpEXcw8tlwOncCtSitNSIqrf3mren/BCiiimahRRRQAUUUUAf/9k=',
      circunscripcion: 'Valencia',
      partido: 'Bildu',
      grupo: 'Grupo Mixto',
      biografia: 'Una larga historia',
      ideologia: 9,
      ideologiaadicional: 1,
    };
  }

  ngOnInit(): void {
  }

}
