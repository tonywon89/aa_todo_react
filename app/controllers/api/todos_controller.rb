class Api::TodosController < ApplicationController

  def create
    @todo = Todo.new(todo_params)
    @todo.done = false

    if @todo.save!
      render json: @todo
    end
  end

  def update
    @todo = Todo.find(params[:id])
    done = @todo.done ? false : true

    if @todo.update!(done: done)
      render json: @todo
    end

  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy!
    render json: @todo
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
