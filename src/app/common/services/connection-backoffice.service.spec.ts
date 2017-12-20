import {TestBed, async, inject} from '@angular/core/testing';
import {HttpModule} from "@angular/http";
import {SerializeService} from "./serialize.service";
import {ConnectionBackofficeService} from './connection-backoffice.service';

describe('ConnectionBackofficeService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [ConnectionBackofficeService, SerializeService]
        });
    });

    it('should ...', inject([ConnectionBackofficeService], (service: ConnectionBackofficeService) => {
        expect(service).toBeTruthy();
    }));
});
