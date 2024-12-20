import TabComponent from "@/components/tabs";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <>
    <DefaultLayout>

      <section className="flex flex-col items-start justify-center gap-4 py-8 md:py-10 ml-[10%] mr-[10%]">
        <TabComponent/>
      </section>
      
    </DefaultLayout>
    {/* <AnimatedBg/> commenting out for now, doesn't work amazingly */}
    </>
  );
}
