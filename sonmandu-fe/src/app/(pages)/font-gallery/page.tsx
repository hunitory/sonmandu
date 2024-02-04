'use server';

import * as Comp from '@/components';
import * as API from '@/apis';

export default async function FontGalleryPage() {
  const querys = {
    startIdx: 0,
    takeCount: 4,
    sort: '',
    tagId: '',
    name: '',
  };
  const requestfontList = async () => {
    return await API.handwriting.fontListInGallery(querys);
  };

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
