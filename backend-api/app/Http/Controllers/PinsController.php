<?php


namespace App\Http\Controllers;


use App\Models\Pin;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class PinsController extends Controller
{
    public function create(Request $request) {
        $data = $request->all();

        $pinValidator = Validator::make($data, [
            'name' => ['required', 'string', 'max:255', 'min:4'],
            'description' => ['required', 'string','max:255', 'min:4'],
            'board_id' => ['required'],
            'img_url' => ['required'],
        ]);

        if($pinValidator->fails()) {
            $errors = $pinValidator->errors()->getMessages();
            $code = Response::HTTP_UNPROCESSABLE_ENTITY;
            return response()->json(['error' => $errors, 'code' => $code], $code);
        }

        $pin = Pin::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'img_url' => $data['img_url'],
            'board_id' => $data['board_id']
        ]);

        return response()->json($pin);
    }

    public function findAll() {
        $pins = Pin::all();

        return response()->json($pins);
    }

    public function findById($id) {
        $pin = Pin::where('id', $id)->first();

        return response()->json($pin);
    }

    public function findBoard($id) {
        $pin = Pin::where('id', $id)->first();
        $board = $pin->board;
        return response()->json($board);
    }

    public function delete($id) {
        $pin = Pin::where('id', $id)->first();

        $pin->delete();

        return response()->json("Pin deleted");
    }

    public function update(Request $request, $id) {
        $pin = Pin::where('id', $id)->first();
        $dataFromThePinToUpdate = $request->all();
        $pin->update($dataFromThePinToUpdate);

        return response()->json($pin);
    }

}
