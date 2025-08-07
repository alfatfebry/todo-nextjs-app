// import { Pagename } from '@/components/Pagename';
import { AddToDo } from '@/components/Todo';

export default function Todo() {
  return (
    <>
      {/* <Pagename title='To Do' /> */}
      <>
        <AddToDo id={0} text={''} complete={false} />
      </>
    </>
  );
}
