import { useForm } from "react-hook-form";

const formConstraints = {
  required: true,
  maxLength: 40,
};

/**
 * Form for submitting a text that is translated into sign images.
 * @returns Translate form (original text)
 */
const TranslateForm = ({ onTranslate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ originalText }) => {
    onTranslate(originalText);
  };

  const errorMessage = (() => {
    if (!errors.originalText) {
      return null;
    }

    if (errors.originalText.type === "maxLength") {
      return <span>Too many characters (max. 40)</span>;
    }
  })();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="original-text"></label>
        <input
          type="text"
          className="form-control mb-2"
          {...register("originalText", formConstraints)}
          placeholder="Text to be translated"
        />
        <div>
          <button type="submit" className="btn btn-secondary">
            Translate
          </button>
          <div>{errorMessage}</div>
        </div>
      </div>
    </form>
  );
};
export default TranslateForm;
