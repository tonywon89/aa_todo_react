class Api::TodosController < ApplicationController

  def create
    @todo = Todo.new(todo_params)
    @todo.done = false

    if @todo.save!
      render json: @todo
    else
      render json: @todo.errors.full_messages
    end
  end

  def update
  end

  def destroy
  end

  def index
    @todos = Todo.all

    render json: @todos
  end

  def show
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body)
  end
end
