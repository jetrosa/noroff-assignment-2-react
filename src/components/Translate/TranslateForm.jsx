import { useForm } from "react-hook-form";

const TranslateForm = ({ onTranslate }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ originalText }) => {
    onTranslate(originalText);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="original-text"></label>
        <input
          type="text"
          className="form-control mb-2"
          {...register("originalText")}
          placeholder="Text to be translated"
        />

        <button type="submit" className="btn btn-primary">
          Translate
        </button>
      </div>
    </form>
  );
};
export default TranslateForm;
