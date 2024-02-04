import * as Comp from '@/components';
import * as API from '@/apis';

export default function FontGalleryPage() {
  const querys = {
    startIdx: 0,
    takeCount: 4,
    sort: '',
    tagId: '',
    name: '',
  };
  const requestfontList = async () => {
    'use server';
    return await API.handwriting.fontListInGallery(querys);
  };
  // console.log(`requestfontList :`, requestfontList());
  return (
    <>
      <Comp.BaseFontCard></Comp.BaseFontCard>
      <Comp.BaseFontCard></Comp.BaseFontCard>
      <Comp.BaseFontCard></Comp.BaseFontCard>
      <Comp.BaseFontCard></Comp.BaseFontCard>
      <Comp.BaseFontCard></Comp.BaseFontCard>
      <Comp.BaseFontCard></Comp.BaseFontCard>
      <Comp.BaseFontCard></Comp.BaseFontCard>
      <Comp.BaseFontCard></Comp.BaseFontCard>
      <Comp.BaseFontCard></Comp.BaseFontCard>
      <Comp.BaseFontCard></Comp.BaseFontCard>
      <Comp.BaseFontCard></Comp.BaseFontCard>
      <Comp.BaseFontCard></Comp.BaseFontCard>
      <Comp.BaseFontCard></Comp.BaseFontCard>
      <Comp.BaseFontCard></Comp.BaseFontCard>
      <Comp.BaseFontCard></Comp.BaseFontCard>
    </>
  );
}
