import {ConfigDto} from "./src/interface/dto/config.dto";
import {ConfigConverter} from "./src/util/converter/config.converter";
import { formatDate } from "./src/util/date";
import defaultFineFormula from "./src/util/defaultFineFormula";

const config: ConfigDto = {
    subtitle: `${new Date().getFullYear()} EOS 겨울방학`,
    title: "아찔한 잔디심기",
    icon: "plant.png",
    globalStartDate: "2024-12-30",
    globalDueDate: "2025-01-31",
    users: [
        {
            name: "정재훈",
            id: "affection-jh",
            startDate: "2024-12-30",
            paid: 0,
            timeoff: ["2024-03-25", "2024-04-01", "2024-04-02"],
        },
        
    ],
    fineFormula: defaultFineFormula,
}


export default ConfigConverter.toConfig(config)