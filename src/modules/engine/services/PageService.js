import {RestQuery} from "./rest.query";
import {TenantService} from "./tenant.service";

class PageService {
    path;
    pageData;

    constructor(path) {
        this.path = path;
    }

    async loadPageData() {
        this.pageData = TenantService.request({});
    }
}
