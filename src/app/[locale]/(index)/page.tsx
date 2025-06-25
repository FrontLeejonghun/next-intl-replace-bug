import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

const Page = ({ params: { locale } }: { params: { locale: string } }) => {
  const t = useTranslations("IndexPage");
  setRequestLocale(locale);

  return (
    <>
      <h1>{t("title")}</h1>
    </>
  );
};

export default Page;
