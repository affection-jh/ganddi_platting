import {ConfigDto} from "./src/interface/dto/config.dto";
import {ConfigConverter} from "./src/util/converter/config.converter";
import { formatDate } from "./src/util/date";
import defaultFineFormula from "./src/util/defaultFineFormula";

const config: ConfigDto = {
    subtitle: `${new Date().getFullYear()} EOS 겨울방학`,
    title: "아찔한 잔디심기",
    icon: "plant.png",
    globalStartDate: "2025-01-02",
    globalDueDate: "2025-02-28",
    users: [
        {
            name: "정재훈",
            id: "affection-jh",
            startDate: "2025-01-01",
            paid: 0,
            timeoff: [],
        },
        {
            name: "노영진",
            id: "yyoungjin",
            startDate: "2025-01-01",
            paid: 0,
            timeoff:[],
        },
        {
            name: "신영빈",
            id: "youngbin03",
            startDate: "2025-01-01",
            paid: 0,
            timeoff:[],
        }
    ],
    fineFormula: defaultFineFormula,
}


export default ConfigConverter.toConfig(config)