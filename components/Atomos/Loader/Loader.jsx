import { DotSpinner } from '@uiball/loaders';
import Style  from "./Loader.module.css"
export const Loader = () => {
	return (
        <div className={Style.container_loader}>
            <DotSpinner size={40} speed={0.9} color='black' />;
        </div>
    )
};
