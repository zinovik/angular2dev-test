import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWindowComponent } from './user-window.component';
import { User } from '../user';

describe('UserWindowComponent', () => {
  let component: UserWindowComponent;
  let fixture: ComponentFixture<UserWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserWindowComponent],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show user details', () => {
    component.user = <User>{
      id: 1,
      name: 'name1',
      username: 'username1',
      email: 'email1',
      address: {
        street: 'street1',
        suite: 'suite1',
        city: 'city1',
        zipcode: 'zipcode1',
        geo: {
          lat: 'lat1',
          lng: 'lng1',
        }
      },
      phone: 'phone1',
      website: 'website1',
      company: {
        name: 'company1',
        catchPhrase: 'catchPhrase1',
        bs: 'bs1',
      },
    };

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const table = compiled.querySelector('table');
    expect(table).toBeTruthy();
    const tds = table.querySelectorAll('td');
    expect(tds.length).toEqual(31);
    expect(tds[0].innerHTML).toEqual('Name: ');
    expect(tds[1].innerHTML).toEqual('name1');
    expect(tds[2].innerHTML).toEqual('Username: ');
    expect(tds[3].innerHTML).toEqual('username1');
    expect(tds[4].innerHTML).toEqual('Email: ');
    expect(tds[5].innerHTML).toEqual('email1');
    expect(tds[6].innerHTML).toEqual(' Address ');
    expect(tds[7].innerHTML).toEqual('Street: ');
    expect(tds[8].innerHTML).toEqual('street1');
    expect(tds[9].innerHTML).toEqual('Suite: ');
    expect(tds[10].innerHTML).toEqual('suite1');
    expect(tds[11].innerHTML).toEqual('City: ');
    expect(tds[12].innerHTML).toEqual('city1');
    expect(tds[13].innerHTML).toEqual('Zipcode: ');
    expect(tds[14].innerHTML).toEqual('zipcode1');
    expect(tds[15].innerHTML).toEqual(' Geo ');
    expect(tds[16].innerHTML).toEqual('Lat: ');
    expect(tds[17].innerHTML).toEqual('lat1');
    expect(tds[18].innerHTML).toEqual('Lng: ');
    expect(tds[19].innerHTML).toEqual('lng1');
    expect(tds[20].innerHTML).toEqual('Phone: ');
    expect(tds[21].innerHTML).toEqual('phone1');
    expect(tds[22].innerHTML).toEqual('Website: ');
    expect(tds[23].querySelector('a').innerHTML).toEqual('website1');
    expect(tds[23].querySelector('a').href).toEqual('https://website1/');
    expect(tds[24].innerHTML).toEqual(' Company ');
    expect(tds[25].innerHTML).toEqual('Company: ');
    expect(tds[26].innerHTML).toEqual('company1');
    expect(tds[27].innerHTML).toEqual('Catch Phrase: ');
    expect(tds[28].innerHTML).toEqual('catchPhrase1');
    expect(tds[29].innerHTML).toEqual('BS: ');
    expect(tds[30].innerHTML).toEqual('bs1');
  });
});
