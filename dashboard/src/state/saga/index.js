import {watchTeams} from "./teams";
import {watchResults} from "./results";

export default function* rootSaga(sagaMiddleware) {
    yield sagaMiddleware.run(watchTeams);
    yield sagaMiddleware.run(watchResults);
}