export const post = async (req, res) => {
  try {
    const { data } = req.body;

    const numbers = [];
    const alphabets = [];
    console.log(data);

    for (const item of data) {
      if (!isNaN(item)) {
        numbers.push(item);
      } else {
        alphabets.push(item);
      }
    }

    const highestAlphabet =
      alphabets.length > 0 ? alphabets.sort().slice(-1)[0] : null;

    const result = {
      status: true,
      user_id: "Bora_Yaswanth_Reddy_28072004",
      college_email_id: "22bcs16081@cuchd.in",
      college_roll_number: "22BCS16081",
      numbers,
      alphabets,
      highestAlphabet,
    };

    res.status(200).json(result);
  } catch (error) {
    console.log("Error in post controller due to ", error);
    return res
      .status(500)
      .json({ status: false, error: "Internal Server Error" });
  }
};

export const get = async (req, res) => {
  res.json({ operation_code: 1 });
};
