import BreadcrumbLight from "@components/breadcrumb/BreadcrumbLight";
import DividerBottom2 from "@components/dividers/DividerBottom2";

export default function PageHeaderAlt({pageTitle,breadcrumbActive}) {
    return (
        <section className="position-relative overflow-hidden bg-dark text-white">
            <div className="container pt-10 pt-lg-15 pb-15 position-relative z-index-1">
                <div className="row pb-lg-7">
                    <div className="col-lg-8 col-md-10 mx-auto text-center">
                        <BreadcrumbLight breadcrumbActive={breadcrumbActive}/>
                        <h1 className="display-4 mb-0">{pageTitle}</h1>
                    </div>
                </div>
                </div>
                <DividerBottom2 height="40" className="position-absolute start-0 bottom-0 text-white"/>
        </section>
    );
}