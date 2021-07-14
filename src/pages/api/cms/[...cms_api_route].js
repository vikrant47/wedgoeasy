import {RestService} from '../../../modules/cms/services/rest.service';
import {BackendRestService} from "../../../modules/cms/services/backend.rest.service";

const API_PATH = '/api/cms';
export default async function handler(req, res) {
  const result = await BackendRestService.instance().request({
    url: `${API_PATH}/${req.query.cms_api_route.join('/')}`,
    method: req.method,
    data: req.body,
    // headers: req.headers,
  });
  res.status(result.status).json(result.data);
}
