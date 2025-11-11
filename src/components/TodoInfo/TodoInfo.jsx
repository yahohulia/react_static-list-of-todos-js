import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  return (
    <article
      className={todo.completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo key={todo.id} user={todo.user} />
    </article>
  );
};
