import View from 'react'
class frontpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            number: ''
        };
    }
    handleChange(value, title) {
        if (title == 'name') {
            this.setState({ name: value });
        }
        if (title == 'email') {
            this.setState({ email: value });
        }
        if (title == 'number') {
            this.setState({ name: value});
        }
    }
    render() {
        return (
            <View>
                <form>
                    <label>
                        Name:
    <input type="text" value={this.state.name} onChange={this.handleChange(value, title = 'name')} />
                    </label>
                    <label>
                        Email:
    <input type="text" value={this.state.email} onChange={this.handleChange(value, title = 'name')} />
                    </label>
                    <label>
                        Number:
    <input type="text" value={this.state.number} onChange={this.handleChange(value, title = 'name')} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </View>
        )
    }


}