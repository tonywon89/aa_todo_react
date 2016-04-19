class Api::TodosController < ApplicationController

  def create!
  end

  def update!
  end

  def destroy!
  end

  def index
    @todos = Todo.all

    render json: @todos
  end

  def show
  end
end
