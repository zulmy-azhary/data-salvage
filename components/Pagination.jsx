import { CgChevronDoubleLeftO, CgChevronDoubleRightO } from 'react-icons/cg';

const Pagination = () => {

    return (
        <div className="mt-5 flex justify-center items-center gap-x-7">
            <div className="flex justify-center items-center gap-x-1">
                <button className="text-secondary cursor-pointer disabled:text-secondary/50 disabled:cursor-default">
                    <CgChevronDoubleLeftO className="text-3xl" />
                </button>
            </div>
            <div className="page-number flex justify-center items-center gap-x-2">
                <p className="text-secondary/50 text-lg cursor-pointer">1</p>
                <p className="text-secondary text-2xl cursor-pointer">2</p>
                <p className="text-secondary/50 text-lg cursor-pointer">3</p>
            </div>
            <div className="flex justify-center items-center gap-x-1">
                <button className="text-secondary cursor-pointer disabled:text-secondary/50 disabled:cursor-default">
                    <CgChevronDoubleRightO className="text-3xl" />
                </button>
            </div>
        </div>
    );
};

export default Pagination;