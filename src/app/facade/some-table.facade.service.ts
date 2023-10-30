@Injectable()
export class SomeTableFacade {
  constructor(private http: HttpClient) {}

  public tableForm = this.formService.tableForm;
}
