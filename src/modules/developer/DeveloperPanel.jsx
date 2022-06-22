import { BotIcon } from "../../icons";
import { DeveloperNavButton } from "./DeveloperNavButton";

export const DeveloperPanel = ({}) => {
    return (
        <div className="w-full flex flex-col flex-1">
            <h4 className="text-primary-100">{"Developer"}</h4>
            <div className="flex flex-col mt-3 gap-3">
                <DeveloperNavButton
                    title={"Space followers"}
                    href="/developer/bots"
                    icon={<BotIcon width={16} height={16} />}
                />
            </div>
        </div>
    );
};
