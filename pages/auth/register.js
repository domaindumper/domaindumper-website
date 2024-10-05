import FormSignUp from "@components/forms/SignUp";
import Layout from "@layouts/LayoutDefault";
import Head from "next/head";
import Link from "next/link";

export default function AuthSignUp() {
    return (
      <>
      <Head>
        <title>DomainDumper | SignUp</title>
      </Head>
        <div className="container pt-12 pt-lg-15 pb-9 pb-lg-11">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5 col-xl-4">
                    <h2 className="display-6">Create account!</h2>
                    <p className="text-muted mb-4">Fill the details to Register an account...</p>
                    <FormSignUp/>
                    <p className="text-muted small mb-0">
                        <small>Already have an account? </small><span className="vr mx-2 align-middle"></span>
                        <Link className="text-decoration-underline d-inline-block" href="/auth/login">
                        Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
      </>
    );
}
AuthSignUp.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }