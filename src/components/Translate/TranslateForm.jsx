import { useForm } from "react-hook-form";

const TranslateForm = ({ onTranslate }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ originalText }) => {
    onTranslate(originalText);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label htmlFor="original-text">Original text:</label>
        <input
          type="text"
          {...register("originalText")}
          placeholder="Text to be translated"
        />
      </fieldset>

      <button type="submit">Translate</button>
    </form>
  );
};
export default TranslateForm;
